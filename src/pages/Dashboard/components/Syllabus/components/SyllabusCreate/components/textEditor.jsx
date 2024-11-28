import { useState, useRef, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '@/pages/Dashboard/components/Syllabus/components/SyllabusCreate/components/styles.css';

export const TextEditor = ({ onCourseObjChange }) => {
  const quillRef = useRef(null);
  const [code, setCode] = useState('');

  const handleProcedureContentChange = useCallback(
    (content, delta, source, editor) => {
      setCode(content);
      onCourseObjChange(content); // Gọi hàm callback để thông báo sự thay đổi
    },
    [onCourseObjChange]
  );

  const handleBack = useCallback(() => {
    const editor = quillRef.current.getEditor();
    editor.history.undo();
  }, []);

  const handleNext = useCallback(() => {
    const editor = quillRef.current.getEditor();
    editor.history.redo();
  }, []);

  const modules = {
    toolbar: {
      container: [
        [
          { back: '<' }, // Biểu tượng hoặc văn bản cho nút back
          { next: '>' }, // Biểu tượng hoặc văn bản cho nút next
        ],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ size: [] }],
        [{ font: [] }],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        [{ color: [] }, { background: [] }],
      ],
      handlers: {
        back: handleBack,
        next: handleNext,
      },
    },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'color',
    'image',
    'background',
    'align',
    'size',
    'font',
  ];

  return (
    <>
      <ReactQuill
        ref={quillRef}
        theme='snow'
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
    </>
  );
};

import React, { useState } from 'react';
import Header from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/Header';
import ProgramNameInput from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/ProgramNameInput';
import SelectedOptions from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/SelectedOption';
import SearchBar from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/SearchBar';

const TrainingProgramCreate = () => {
  const [createClicked, setCreateClicked] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputTerm, setInputTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredSuggestions = ['Option 1', 'Option 2', 'Option 3'].filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleInputTerm = (e) =>{
    const value = e.target.value;
    setInputTerm(value)
  }

  const handleSelectOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleRemoveOption = (optionToRemove) => {
    const updatedOptions = selectedOptions.filter((option) => option !== optionToRemove);
    setSelectedOptions(updatedOptions);
  };

  return (
    <>
      <Header createClicked={createClicked} programName={inputTerm} />
      {createClicked ? 
        <ProgramNameInput createClicked={createClicked} setCreateClicked={setCreateClicked} inputTerm={inputTerm} handleInputTerm={handleInputTerm} />
      : <>
        {selectedOptions.length > 0 && <SelectedOptions selectedOptions={selectedOptions} handleRemoveOption={handleRemoveOption} />}
        <SearchBar searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} 
        handleSelectOption={handleSelectOption} createClicked={createClicked} setCreateClicked={setCreateClicked} />
      </>
      }
    </>
  );
};

export default TrainingProgramCreate;

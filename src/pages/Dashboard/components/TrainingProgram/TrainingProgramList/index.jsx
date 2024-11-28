import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { trainingProgramTable } from "@/mocks/trainingProgramFakeData";
import { ProgramList } from "@/pages/Dashboard/components/TrainingProgram/TrainingProgramList/ProgramList";
import { BlackAddNewButton, RedImportButton} from "@/pages/Dashboard/components/TrainingProgram/TrainingProgramList/components/Buttons";
import { SearchBar} from "@/pages/Dashboard/components/TrainingProgram/TrainingProgramList/components/SearchBar";

export const TrainingProgramList = () => {
    const [programs, setPrograms] = React.useState([]);
    
    React.useEffect(() => {
        setPrograms(trainingProgramTable);
    }, []);

    return (
        <>
            <Box
                width="100%"
                bg="#2D3748"
                color="white"
                borderRadius="8px"
                p="4"
                textAlign="center"
                boxShadow="md"
                marginTop={'1rem'}
            >
                <h2>TRAINING PROGRAM</h2>
            </Box>

            <Flex width={'full'}>
                <SearchBar />
            </Flex>

            <Flex justifyContent={'flex-end'} width={'full'}>
                <RedImportButton />
                <BlackAddNewButton />
            </Flex>

            <Flex flexDirection='column' rowGap={3} width='100%'>
                <ProgramList data={programs} />
            </Flex>
        </>
    );
}

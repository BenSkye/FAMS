import React from 'react';
import {
    Flex
} from '@chakra-ui/react';

const ActiveStatus = () => {
    return (
        <>
            <Flex background='#90EE90' width='fit-content' color='#FFF' paddingX={2} paddingY={1} borderRadius={8}>Active</Flex>
        </>
    )
}

const InactiveStatus = () => {
    return (
        <>
            <Flex background='#2D3748' width='fit-content' color='#FFF' paddingX={2} paddingY={1} borderRadius={8}>Inactive</Flex>
        </>
    )
}

const DraftStatus = () => {
    return (
        <>
        <Flex background='#d3d3d3' width='fit-content' color='#000000' paddingX={2} paddingY={1} borderRadius={8}>Draft</Flex>
        </>
    )
}

export { ActiveStatus, InactiveStatus, DraftStatus}
import {Tasq} from "../../Model/Tasq/Tasq";
import {Box, Text, Card, IconButton, CardBody, CardHeader, Flex} from "@chakra-ui/react";
import React, {FC} from "react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

type TasqProps = {
    todo: Tasq | any,
    changeStatus: (tasq: Tasq) => void
}

const TasqComponent: FC<TasqProps> = (props) => {

    const [tasq, setTasq] = React.useState(props.todo);
    const bg = tasq.status === 'true' ? 'green.300' : ''


    return (
        <Card maxW='md' background={bg} mb={'5'}>
            <CardHeader pb={'2'}>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Box>
                            <Text fontSize={'lg'}>{tasq.name}</Text>
                        </Box>
                    </Flex>
                    {tasq.status === 'true' &&
                        <IconButton
                            value={tasq.id}
                            onClick={() => props.changeStatus(tasq)}
                            variant='ghost'
                            colorScheme='gray'
                            aria-label=''
                            icon={<CloseIcon />}
                        />
                    }
                    {tasq.status === 'false' &&
                        <IconButton
                            value={tasq.id}
                            onClick={() => props.changeStatus(tasq)}
                            variant='ghost'
                            colorScheme='gray'
                            aria-label=''
                            icon={<CheckIcon />}
                        />
                    }
                </Flex>
            </CardHeader>
            <CardBody pt={'2'}>
                <Text>
                    {tasq.description}
                </Text>
            </CardBody>
        </Card>
    )
}

export default TasqComponent
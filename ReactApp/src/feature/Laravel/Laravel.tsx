import {
    Center, Container, Text
} from "@chakra-ui/react";
import React from "react";
import { LaravelService } from "../../Services/LaravelService";


const Laravel = () => {
    const laravelService = LaravelService.getInstance();
    
    // get message from Laravel Service
    const [message, setMessage] = React.useState<string>('Hello World');

    // on page load get message from Laravel Service
    React.useEffect(() => {
        laravelService.getLaravelMessage().then((message) => {
            console.log(message);
            setMessage(message);
        });
    }, [laravelService]);

    return (
        <>
            <Container w='100%' maxWidth='65%'>
                <Center>
                    <Text fontSize='4xl' fontWeight='bold'>{message}</Text>
                </Center>
            </Container>
        </>
    );
};

export default Laravel
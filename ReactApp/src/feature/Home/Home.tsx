import {
    Box, Button, Center, Container, Flex, FormControl, FormLabel, Input, Modal,
    ModalBody,
    ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, Textarea, useDisclosure, useToast
} from "@chakra-ui/react";
import {TasqService} from "../../Services/Tasq.Service";
import {Tasq} from "../../Model/Tasq/Tasq";
import TasqComponent from "../../component/Tasq/Tasq.component";
import React, {useState} from "react";

export interface ITasqProps {
    id: number;
    name: string;
    description: string;
    category: string;
    status: string;
    date: Date;
}

const Home = () => {
    const tasqService = TasqService.getInstance();

    const [tasqs, setTasqs] = React.useState<ITasqProps[]>([]);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')
    const toastAjouter = useToast()
    const isContentInvalid = content === ''
    const isTitleInvalid = title === ''
    const isCategoryInvalid = category === ''
    const isSubmitDisabled = isContentInvalid || isTitleInvalid || isCategoryInvalid


    function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setCategory(event.target.value)
    }

    function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        if (title === '' || category === '' || content === '') {
            return
        }

        event.preventDefault()
        const tasq = new Tasq(title, content, category, 'false', new Date());
        tasqService.addTasq(tasq)
        const tasqsCopy = [...tasqs]
        tasqsCopy.push(tasq)
        setTasqs(tasqsCopy)


        toastAjouter({
            title: "Tâche ajoutée",
            description: "Votre tâche a bien été ajoutée",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: 'bottom-right'
        })

        onClose()
        clearForm()
    }

    function clearForm() {
        setTitle('')
        setCategory('')
        setContent('')
    }

    function changeStatus(tasq: Tasq) {
        tasq.status = tasq.status === 'true' ? 'false' : 'true';
        tasqService.updateTasq(tasq)
        const tasqsCopy = [...tasqs]
        setTasqs(tasqsCopy)
    }


    React.useEffect(() => {
        tasqService.getTasqs().then((tasqs: Tasq[]) => {
            setTasqs(tasqs);
        });
    }, [tasqs])


    return (
        <>
            <Button  colorScheme="facebook" ml={4} onClick={onOpen}>
                Ajouter une tâche
            </Button>
            <Container w='100%' maxWidth='65%'>
                <Flex>
                    <Container>
                        <Box>
                            <Center><Text fontSize='xl'>Tâches terminés</Text></Center>
                            <br/>
                            <Flex direction={'column'}>
                                {tasqs.filter(tasq => tasq.status === 'true').map(tasq => <TasqComponent key={tasq.id} todo={tasq} changeStatus={changeStatus} />)}
                            </Flex>
                        </Box>
                    </Container>
                    <Container>
                        <Box>
                            <Center><Text fontSize='xl'>Tâches en cours</Text></Center>
                            <br/>
                            <Flex direction={'column'}>
                                {tasqs.filter(tasq => tasq.status === 'false').map(tasq => <TasqComponent key={tasq.id} todo={tasq} changeStatus={changeStatus} />)}
                            </Flex>
                        </Box>
                    </Container>
                </Flex>
            </Container>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Ajouter une tâche</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Titre</FormLabel>
                                <Input type='text' value={title} onChange={handleTitleChange} isInvalid={isTitleInvalid} errorBorderColor='red.300' />
                            </FormControl>
                            <br/>
                            <Select placeholder='Selectionner une catégorie' value={category} onChange={handleCategoryChange} isInvalid={isCategoryInvalid} errorBorderColor='red.300'>
                                <option value='option1' style={{ background: 'red' }}>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <br/>
                            <FormControl>
                                <FormLabel>Contenu</FormLabel>
                                <Textarea
                                    value={content}
                                    onChange={handleContentChange}
                                    placeholder='Ceci est un exemple de contenu'
                                    isInvalid={isContentInvalid}
                                    errorBorderColor='red.300'
                                />
                            </FormControl>
                            <br/>
                            <Button
                                isDisabled={isSubmitDisabled}
                                colorScheme='facebook'
                                type={'submit'}
                            >Ajouter</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Home
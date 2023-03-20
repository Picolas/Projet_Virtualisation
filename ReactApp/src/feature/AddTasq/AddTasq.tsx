import * as React from "react";
import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Select,
    Spacer,
    Textarea, useToast
} from "@chakra-ui/react";
import {useState} from "react";
import {TasqService} from "../../Services/Tasq.Service";
import {Tasq} from "../../Model/Tasq/Tasq";

const AddTasq = () => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')
    const toastAjouter = useToast()
    const tasqService = new TasqService()
    const tasqs = tasqService.getTasqs()
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

        /*
        event.preventDefault()
        const tasq = new Tasq(tasqService.getTasqs().length + 1, title, category, content, 'false', new Date())
        tasqService.addTasq(tasq)
        */

        toastAjouter({
            title: "Tâche ajoutée",
            description: "Votre tâche a bien été ajoutée",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: 'bottom-right'
        })
        event.preventDefault();
    }

    return (
        <>
            <Container maxWidth={'65%'}>
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
            </Container>
        </>
    )
}

export default AddTasq;
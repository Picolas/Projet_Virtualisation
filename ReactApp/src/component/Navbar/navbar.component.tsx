import {Flex, Spacer, Button, LinkBox} from "@chakra-ui/react";
import {Route, Routes} from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from "../../feature/Home/Home";

export function Navbar() {
    return (
        <Flex align="center" justify="space-between" p={4}>
                <Link to='/'>
                    <Button>
                        TODOLIST
                    </Button>
                </Link>
                <Spacer />


        </Flex>
    );
}
/*
<Link to='/add'>
    <Button colorScheme="facebook" ml={4}>
        Ajouter une tâche
    </Button>
</Link>
 */
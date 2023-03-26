import {Flex, Spacer, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <Flex align="center" justify="space-between" p={4}>
                <Link to='/'>
                    <Button>
                        TODOLIST
                    </Button>
                </Link>
                <Spacer />
                <Link to='/laravel'>
                    <Button>
                        Laravel
                    </Button>
                </Link>

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
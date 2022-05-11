import Head from "next/dist/shared/lib/head";
import { Box } from "@chakra-ui/react";

const Layout = ({children}) => (
    <>
    <Head>
        <title>Real Estate</title>

    </Head>
    <Box maxWidth="1280px" m = "auto">
        <header>
            <Navbar>
                Navbar
            </Navbar>
        </header>
        <main>
            {children}
        </main>

        <footer>
            Footer
        </footer>
    </Box>
    </>
)

export default Layout;
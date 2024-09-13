import Box from '../Box'
import List from '../List'
import NavBar from "../NavBar/NavBar";


export default function HomePage() {
    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    }
    return <>
        <NavBar />
        <h1>Home Page</h1>

        <h2>Seminar 4</h2>
        <Box>
            <h4>Title</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum animi sunt suscipit nostrum ipsum dolore dolorum, ea consequatur cumque aut.</p>
        </Box>
        <Box>
            <a href="#">Link</a>
        </Box>
        <Box>
            <img src="https://avatars.mds.yandex.net/i?id=a8ffc42530d11d373e07ff512a9e4a96a6562d79-12731000-images-thumbs&n=13" alt="priroda" />
        </Box>
        <Box></Box>
        <List lstItems={[10, 20, 30, 40, 50]} getColor={random_rgba} />
    </>
}
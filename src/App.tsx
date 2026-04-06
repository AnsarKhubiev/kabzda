import {Accordion} from './components/Accordion/Accordion.tsx';
import {Rating} from './components/Rating/Rating.tsx';

function App() {

    return (
        <div>
            <PageTitle title='This is the App'/>
            <Rating value={3} />
            <Accordion collapsed={false} title='Меню'/>
            <Accordion collapsed={false} title='Users'/>
        </div>
    )
}

type PageTitleProps = {title: string}
const PageTitle = ({title}: PageTitleProps) => <h1>{title}</h1>


export default App


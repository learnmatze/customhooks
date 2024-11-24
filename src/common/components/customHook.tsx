import Toggler from "./Toggler.tsx";
import DataFetcher from "./DataFetcher.tsx";
import ImageClassifier from "./ImageClassifier.tsx";
import ResizeComponent from "./ResizeComponent.tsx"
import LocalStorage from "./LocalStorage.tsx";
import ThemeProviderApp from "./ThemeProviderApp.tsx";
import DebouncerInput from "./DebouncerInput.tsx";
import DebounceNPMCustomHook from "./useDebounce/usehooksDebounce.tsx";


interface User {
    id: number;
    name: string;
}

interface Post {
    id: number;
    title: string;
}

const CustomHook: React.FC = () => {
    return (
        <>
            {/*<Toggler></Toggler>*/}
            <DataFetcher />
            {/*<ResizeComponent></ResizeComponent>*/}
            {/*<ImageClassifier></ImageClassifier>*/}
            {/*<LocalStorage></LocalStorage>*/}
            {/*<ThemeProviderApp></ThemeProviderApp>*/}
            {/*<DebouncerInput></DebouncerInput>*/}
            <DebounceNPMCustomHook></DebounceNPMCustomHook>
        </>
    )
}
export default CustomHook;
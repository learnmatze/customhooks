import useWindowSize from './hooks/useWindowSize';

function ResizeComponent() {
    const size =useWindowSize();
    console.log(size);
    return (
        <div>
            Fensterbreite: {size.width} px
            <br />
            Fensterhöhe: {size.height} px
        </div>
    )
}
export default ResizeComponent;
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery>
            <div></div>
        <Item
            original="https://placekitten.com/1024/768?image=1"
            thumbnail="https://placekitten.com/80/60?image=1"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=1"  alt=""/>
            )}
        </Item>
        <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>,
                <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>
            )}
        </Item>
            <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>,
                            <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>
                    )}
            </Item>
            <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>,
                            <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>
                    )}
            </Item>
            <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>,
                            <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>
                    )}
            </Item>
            <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>,
                            <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>
                    )}
            </Item>
            <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>,
                            <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>
                    )}
            </Item>
            <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>,
                            <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>
                    )}
            </Item>
            <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
            >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src="https://placekitten.com/280/160?image=2"  alt=""/>,
                            <img ref={ref} onClick={open} src="https://placekitten.com/180/160?image=2"  alt=""/>
                    )}
            </Item>

    </Gallery>
)
export default MyGallery;
import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox-next'
import {PaletteTree} from './palette'
import Home from "@/pages";
import Contact from "@/pages/contact";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/Contact">
                <Contact/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
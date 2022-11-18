import React from 'react';

function SkillsImages (props: any) {
    return (
        <div>
            <img src={props.src} id={props.id} className="skillsImage" alt={props.alt}/>
        </div>
        
    )
}

export default SkillsImages;
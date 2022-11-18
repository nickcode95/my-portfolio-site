import React from 'react';
import SkillsImages from './SkillsImages';
import Portfolio from './Portfolio';


function CanDo() {
    return (
        <div>
            <div className="center">
                {/* Desktop skill section */}
                <div className="desktop-skills center">
                    <div className="flex-container">
                        <div >
                            <SkillsImages src="/images/azure.jpg" id="azure" alt="Azure logo"></SkillsImages>
                            <SkillsImages src="images/mailchimp.png" alt="mailchimp logo"></SkillsImages>
                            <SkillsImages src="images/react.png" alt="react-logo"></SkillsImages>
                        </div>
                        <div className='flex-children'>
                        <SkillsImages src="images/typescript.png" alt="typescript-logo"></SkillsImages>
                        <SkillsImages src="images/jslogo.png" alt="javascript-logo"></SkillsImages>
                        <SkillsImages src="images/cssLogo.png" id="css" alt="css logo"></SkillsImages>
                        
                        </div>
                        <div className='flex-children'>
                            <SkillsImages src="images/nodeJsLogo.png" id="node" alt="node-logo"></SkillsImages>
                            <SkillsImages src="images/htmlLogo.png" id='node' alt="html-logo"></SkillsImages>
                            <SkillsImages src="images/express.png" id='node' alt="express logo"></SkillsImages>
                        </div>
                        
                    </div>
                </div>
                {/* Mobile Skill section */}
                <div className="mobile-skills">
                    <div className="justify-content">
                        <div>
                            <SkillsImages src="images/react.png" alt="react-logo"></SkillsImages>
                            <SkillsImages src="images/typescript.png" alt="typescript-logo"></SkillsImages>
                            <SkillsImages src="/images/azure.jpg" id="azure" alt="Azure logo"></SkillsImages>
                            <SkillsImages src="images/mailchimp.png" alt="mailchimp logo"></SkillsImages>
                        </div>
                        <div className="width"></div>
                        <div>

                            <SkillsImages src="images/jslogo.png" alt="javascript-logo"></SkillsImages>
                            <SkillsImages src="images/cssLogo.png" id="css" alt="css logo"></SkillsImages>
                            <SkillsImages src="images/htmlLogo.png" alt="html-logo"></SkillsImages>
                            <SkillsImages src="images/nodeJsLogo.png" id="node" alt="node-logo"></SkillsImages>
                        </div>

                    </div>
                </div>
                <div className="padding-top"></div>
            </div>
            <div className="overflow green">
                <div className="padding-top">
                    <h2 className="center">Website Projects</h2>
                    <div className="portfolio max-width">
                        <Portfolio src="images/flexthinking.png" href="https://flexible-thinking.azurewebsites.net/" />
                        <Portfolio src="images/calendafy.png" href="https://calendafy.com" GitHub="https://github.com/nickcode95/Calendafy-Website" />
                        <Portfolio src="images/blog.png" href="https://cookingwithnicko.com/recipes" />
                    </div>
                </div>
                <div className="padding-top">
                    <h2 className="center">Web App Projects</h2>
                    <div className="portfolio max-width">
                        <Portfolio src="images/todo.png" href="https://need-to-do-list-react.azurewebsites.net" GitHub="https://github.com/nickcode95/todolist" />
                        <Portfolio src="images/emojipedia.png" href="https://emojipedia.azurewebsites.net" GitHub="https://github.com/nickcode95/Emoji-Dictionary" />
                        <Portfolio src="images/programmerjokes.png" href="https://programmerjokes.azurewebsites.net" />
                    </div>
                </div>

            </div>

            <div className="padding-top"></div>
        </div>

    )
}

export default CanDo;
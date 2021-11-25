import React from 'react';
import Skill, { SkillProps } from './Skill'
import Tools, { Props as ToolsListType } from './Tools';
import Interest from './Interest';
import "./Skills.css";

const Skills = () => {
    const skillList: SkillProps[] = [
        {
            title: 'Node',
            rating: 4,
        },
        {
            title: 'TS',
            rating: 4,
        },
        {
            title: 'REACT',
            rating: 3,
        }
    ];

    const toolsList: ToolsListType [] = [
        {
            category: 'Frameworks Backend',
            list: ['EXPRESSJS'],
        },
        {
            category: 'Frameworks Frontend',
            list: ['REACT', 'ANGULAR'],
        },
        {
            category: 'NoSQL',
            list: ['GOOGLE FIREBASE', 'MONGODB', 'ELASTICSEARCH'],
        },
        {
            category: 'Cloud',
            list: ['AWS', 'GCP'],
        },
        {
            category: 'Outils de développement',
            list: ['VISUAL STUDIO CODE', 'JEST', 'GIT', 'GITHUB'],
        },
        {
            category: 'DevOps/Intégration continue',
            list: ['JENKINS', 'DOCKER'],
        },
    ];

    return (
        <>
            <div className="skills">
                <h2 className="h2">Compétences</h2>
                {skillList.map((skill) => (<Skill key={skill.title} title={skill.title} rating={skill.rating} />))}
            </div>
            <div className="skills">
                <h2 className="h2">Outils</h2>
                { toolsList.map((tool) => (<Tools category={tool.category} list={tool.list} />)) }
            </div>
            <div className="skills">
                <h2 className="h2">Langues</h2>
                <Skill title="Français" rating={5} />
                <Skill title="Créole" rating={5} />
                <Skill title="Anglais" rating={4} />
            </div>
            <Interest />
        </>
    )

}


export default Skills

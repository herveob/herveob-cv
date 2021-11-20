import React from 'react'

export interface SkillProps {
    title: string;
    rating: number
}

const Skill = ({ title, rating }: SkillProps) => (
    <div className="skill">
        <p className="skill__title">{title}</p>
        <div className="skil__rating">
            <div className={`circle ${rating > 0 && "circle-plain"}`}></div>
            <div className={`circle ${rating > 1 && "circle-plain"}`}></div>
            <div className={`circle ${rating > 2 && "circle-plain"}`}></div>
            <div className={`circle ${rating > 3 && "circle-plain"}`}></div>
            <div className={`circle ${rating > 4 && "circle-plain"}`}></div>
        </div>
    </div>
)

export default Skill

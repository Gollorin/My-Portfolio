import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import SchoolIcon from '../../../../pictures/SchoolIcon.svg';
import WorkIcon from '../../../../pictures/WorkIcon.svg';
import 'react-vertical-timeline-component/style.min.css';
import './ThirdSection.css';

function ThirdSection() {
    return (
        <section className='sec-three' id='experience'>
            <h1 className='sec-header'><span>3.</span> My Journey</h1>
            <hr></hr>

            <div className='timeline-cont'>
                <VerticalTimeline className={'timeline-line'}>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--cl-black)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid var(--cl-primary)' }}
                        date="2019 - 2023"
                        iconStyle={{ background: 'var(--cl-black)', color: 'var(--cl-primary)' }}
                        icon={<img src={SchoolIcon} alt="icon"></img>}>
                        <h3 className='time-line-title'>Soukromá Střední Škola Výpočetní Techniky</h3>
                        <h4 className='time-line-desc'>High School</h4>
                        <p> Learning of basics of SQL databases, C# projects, PHP with Bootstrap </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--cl-black)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid var(--cl-primary)' }}
                        date="May - June 2019"
                        iconStyle={{ background: 'var(--cl-black)', color: 'var(--cl-primary)' }}
                        icon={<img src={WorkIcon} alt="icon"></img>}>
                        <h3 className='time-line-title'>JUST Nahrin s.r.o.</h3>
                        <h4 className='time-line-desc'>Part-time Work</h4>
                        <p> Technical Support and assistance at the IT department, testing various database script. </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--cl-black)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid var(--cl-primary)' }}
                        date="May 2022"
                        iconStyle={{ background: 'var(--cl-black)', color: 'var(--cl-primary)' }}
                        icon={<img src={WorkIcon} alt="icon"></img>}>
                        <h3 className='time-line-title'>Fortuna Game a.s. </h3>
                        <h4 className='time-line-desc'>School Practice</h4>
                        <p> I gained valuable experience, where I learned the basics of networking and experienced how it works in large companies. </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--cl-black)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid var(--cl-primary)' }}
                        date="2023 - Present"
                        iconStyle={{ background: 'var(--cl-black)', color: 'var(--cl-primary)' }}
                        icon={<img src={SchoolIcon} alt="icon"></img>}>
                        <h3 className='time-line-title'>VŠE ▪ Faculty of Informatics</h3>
                        <h4 className='time-line-desc'>University</h4>
                        <p>I'm in first semester, so I don't have much to say</p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>

        </section>
    );
}

export default ThirdSection;
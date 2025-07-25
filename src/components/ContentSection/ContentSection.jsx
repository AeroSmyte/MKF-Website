import ImageInfoBlock from '../ImageInfoBlock/ImageInfoBlock'
import ImageInfoBlockReversed from '../ImageInfoBlock/ImageInfoBlockReversed'
import './ContentSection.css';

function ContentSection() {
  return (
    <div className='info-block-container'>
        <ImageInfoBlock 
            img="src/assets/potential-2.jpg"
            title="Discover Your Potential"
            contentText="At Freddie's Modern Kung Fu, we believe that everyone possesses untapped potential within themselves. 
                Whether you are a fitness enthusiast, martial arts practitioner, or someone eager to embark on a transformative journey, 
                our school is the perfect place to unlock your capabilities. 
                Through a comprehensive curriculum that seamlessly integrates fitness training, martial arts, and mindfulness practices, 
                we empower our students to achieve their personal best."
         />
        <ImageInfoBlockReversed
            img="src/assets/pushup.jpg"
            title="Martial Arts Excellence"
            contentText="Our instructors are not just teachers; they are dedicated practitioners with a passion for sharing the profound wisdom of Kung Fu. 
            From the dynamic and adaptable Jeet Kune Do, the graceful and powerful Wing Chun Kung Fu, the traditional Choy Lay Fut Kung Fu, 
            the practical and efficient Tactical Kickboxing, the meditative and gentleness of Tai Chi and Qigong, 
            our classes cater to a diverse range of interests and skill levels. Whether you are a beginner or an advanced practitioner, 
            our expert instructors are committed to guiding you on your martial arts journey." 
        />
        <ImageInfoBlock
            img="src/assets/holistic.jpg"
            title="Holistic Well-being"
            contentText="Beyond physical training, we recognize the importance of mental and spiritual well-being. Our curriculum includes the gentle and flowing movements of Tai Chi,
             a practice renowned for its ability to enhance balance, flexibility, and inner peace. As well as Qigong,
              a traditional Chinese practice that involves movement, meditation, and breath regulation to improve the body's energy flow. 
               In addition, our meditation sessions provide a sanctuary for introspection and mindfulness, 
               fostering mental clarity and stress relief." 
        />
        <ImageInfoBlockReversed
            img="src/assets/community.jpg"
            title="A Community of Martial Artists"
            contentText="BJoin a community of like-minded individuals who share a passion for self-improvement and a commitment to the martial arts lifestyle. 
            Our school provides a supportive and inclusive environment where students encourage and inspire each other to reach new heights. 
            Together, we cultivate resilience, discipline, and a sense of camaraderie." 
        />
    </div>
  )
}

export default ContentSection
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import image from '../../assets/home-image.png';
import { CheckMarkIcon, PeopleIcon, QuestionMarkIcon } from 'assets/sprite';

export const HomePage = () => {
  return (
    <div className={`container ${css.home_page_container}`}>
      <div className={css.campaign_container}>
        <h1 className={css.main_title}>
          The road to the <span className={css.part_of_title}>depths</span> of
          the human soul
        </h1>
        <p className={css.description}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>

        <div className={css.get_started_link_container}>
          <Link className={css.get_started_link} to="psychologists">
            Get Started
          </Link>
        </div>
      </div>

      <div className={css.image_container}>
        <img className={css.image} src={image} alt={'girl'} />

        <div className={css.question_mark_container}>
          <QuestionMarkIcon />
        </div>

        <div className={css.people_container}>
          <PeopleIcon />
        </div>

        <div className={css.experiance_container}>
          <div className={css.check_mark_container}>
            <CheckMarkIcon />
          </div>

          <div className={css.experiance_title_number_container}>
            <p className={css.experiance_title}>Experienced psychologists</p>
            <h3 className={css.expireance_number}>15,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

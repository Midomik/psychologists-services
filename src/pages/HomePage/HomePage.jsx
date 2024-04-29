import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import imagePng from '../../assets/home-image.png';
import image2xPng from '../../assets/image2x.png';
import image3xPng from '../../assets/image3x.png';
import imageWebp from '../../assets/imageWebp.webp';
import imageWebp2x from '../../assets/image2xWebp.webp';
import imageWebp3x from '../../assets/image3xWebp.webp';

import {
  ArrowIcon,
  CheckMarkIcon,
  PeopleIcon,
  QuestionMarkIcon,
} from 'assets/sprite';

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
            <div className={css.arrow_icon_container}>
              <ArrowIcon />
            </div>
          </Link>
        </div>
      </div>

      <div className={css.image_container}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${imageWebp} 1x, ${imageWebp2x} 2x, ${imageWebp3x} 3x`}
          />
          <source
            type="image/png"
            srcSet={`${imagePng} 1x, ${image2xPng} 2x, ${image3xPng} 3x`}
          />
          <img className={css.image} srcSet={imagePng} alt={'girl'} />
        </picture>

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

import EarlierProjectCard from './EarlierProjectCard';

import MamisonImage1 from '@/images/mamison/mamison_1.png';
import MamisonImage2 from '@/images/mamison/mamison_2.png';
import MamisonImage3 from '@/images/mamison/mamison_3.png';
import PlaytagImage1 from '@/images/playtag/playtag_1.png';
import PlaytagImage2 from '@/images/playtag/playtag_2.png';
import PlaytagImage3 from '@/images/playtag/playtag_3.png';
import LoudlyImage1 from '@/images/loudly/loudly_1.png';
import LoudlyImage2 from '@/images/loudly/loudly_2.png';
import IsdtImage1 from '@/images/isdt/isdt_1.png';
import IsdtImage2 from '@/images/isdt/isdt_2.png';
import IsdtImage3 from '@/images/isdt/isdt_3.png';

const PUBLISHING_PROJECTS = [
  {
    title: '마미손 홈페이지 퍼블리싱',
    images: [MamisonImage1, MamisonImage2, MamisonImage3],
  },
  {
    title: 'NFT 마켓 퍼블리싱',
    images: [PlaytagImage1, PlaytagImage2, PlaytagImage3],
  },
  {
    title: '라우들리 회사 홈페이지 퍼블리싱',
    images: [LoudlyImage1, LoudlyImage2],
  },
  {
    title: 'ISDT 코인 소개 홈페이지 퍼블리싱',
    images: [IsdtImage1, IsdtImage2, IsdtImage3],
  },
];

export default function WebsitePublishing() {
  return (
    <>
      {PUBLISHING_PROJECTS.map((project) => (
        <EarlierProjectCard
          key={project.title}
          title={project.title}
          summary='웹 퍼블리싱'
          images={project.images}
          skills={['HTML', 'CSS', 'jQuery']}
          highlights={[]}
        />
      ))}
    </>
  );
}

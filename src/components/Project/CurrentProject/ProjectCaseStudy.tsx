import { Box } from '@mui/material';
import theme from '@/style/theme';
import useWindowSize from '@/hooks/useWindowSize';

type Highlight = { title: string; details: string[] };

export default function ProjectCaseStudy(props: {
  label: string;
  title: string;
  description: string;
  skills: string;
  highlights: Highlight[];
  url: string;
  images?: string[];
  isSubsequent?: boolean;
}) {
  const { isDesktop } = useWindowSize();
  const hasImages = props.images !== undefined && props.images.length > 0;

  return (
    <Box sx={[
      props.isSubsequent === true && { borderTop: `1px solid ${theme.color.text.primary}`, marginTop: '56px', paddingTop: '40px' },
      props.isSubsequent === true && isDesktop === true && { marginTop: '80px', paddingTop: '56px' }
    ]}>
      <Box sx={[
        { borderBottom: `1px solid ${theme.color.border.default}`, paddingBottom: '28px' },
        isDesktop === true && { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(340px, 0.75fr)', gap: '80px', paddingBottom: '40px' }
      ]}>
        <Box>
          <Box component={'p'} sx={{ color: theme.color.primary, fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', margin: 0 }}>
            { props.label }
          </Box>
          <Box component={'h4'} sx={[
            { fontSize: '28px', lineHeight: 1.3, margin: '10px 0 0', wordBreak: 'keep-all' },
            isDesktop === true && { fontSize: '38px' }
          ]}>
            { props.title }
          </Box>
        </Box>
        <Box component={'p'} sx={[
          { color: theme.color.text.secondary, fontSize: '14px', lineHeight: 1.7, margin: '18px 0 0', wordBreak: 'keep-all' },
          isDesktop === true && { alignSelf: 'end', fontSize: '16px', margin: 0 }
        ]}>
          { props.description }
        </Box>
      </Box>

      <Box component={'p'} sx={{ color: theme.color.primary, fontSize: '12px', fontWeight: 500, lineHeight: 1.7, margin: hasImages === true ? '16px 0 28px' : '16px 0 40px', wordBreak: 'keep-all' }}>
        { props.skills }
      </Box>

      { hasImages === true && <ProjectImages images={props.images as string[]} isDesktop={isDesktop} /> }

      <Box sx={[
        { display: 'grid', gap: '32px' },
        isDesktop === true && { gridTemplateColumns: '180px minmax(0, 1fr)', gap: '56px' }
      ]}>
        <Box component={'h5'} sx={{ color: theme.color.primary, fontSize: '13px', letterSpacing: '0.06em', margin: 0 }}>
          KEY CONTRIBUTIONS
        </Box>
        <Box>
          { props.highlights.map((highlight, index) =>
            <HighlightItem isDesktop={isDesktop} isLast={index === props.highlights.length - 1} key={highlight.title} {...highlight} />
          )}
        </Box>
      </Box>

      <Box component={'a'} href={props.url} target='_blank' rel='noreferrer' sx={{ color: theme.color.primary, display: 'inline-block', fontSize: '13px', fontWeight: 700, marginTop: '32px', textDecoration: 'none' }}>
        { props.url }
      </Box>
    </Box>
  );
}

function ProjectImages(props: { images: string[]; isDesktop: boolean }) {
  return (
    <Box sx={[
      { display: 'grid', gap: '4px', gridTemplateColumns: 'minmax(0, 1fr) 0.5fr', gridTemplateRows: 'repeat(3, 84px)', margin: '0 -20px 40px' },
      props.isDesktop === true && { gridTemplateColumns: 'minmax(0, 1fr) 280px', gridTemplateRows: 'repeat(3, 100px)', margin: '0 0 64px' }
    ]}>
      { props.images.map((image, index) =>
        <Box component={'img'} key={image} src={image} alt='웨딩북 서비스 화면' sx={{ display: 'block', gridRow: index === 0 ? 'span 3' : undefined, height: '100%', objectFit: 'cover', width: '100%' }} />
      )}
    </Box>
  );
}

function HighlightItem(props: Highlight & { isDesktop: boolean; isLast: boolean }) {
  return (
    <Box sx={[
      { borderBottom: props.isLast === false ? `1px solid ${theme.color.border.default}` : 0, marginBottom: props.isLast === false ? '28px' : 0, paddingBottom: props.isLast === false ? '28px' : 0 },
      props.isDesktop === true && { marginBottom: props.isLast === false ? '32px' : 0, paddingBottom: props.isLast === false ? '32px' : 0 }
    ]}>
      <Box component={'h6'} sx={[
        { fontSize: '16px', lineHeight: 1.5, margin: '0 0 12px', wordBreak: 'keep-all' },
        props.isDesktop === true && { fontSize: '18px' }
      ]}>
        { props.title }
      </Box>
      { props.details.length > 0 &&
        <Box component={'ul'} sx={{ color: theme.color.text.secondary, fontSize: '13px', lineHeight: 1.7, margin: 0, paddingLeft: '20px', wordBreak: 'keep-all' }}>
          { props.details.map((detail) => <li key={detail}>{ detail }</li>) }
        </Box>
      }
    </Box>
  );
}

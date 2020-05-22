import OriginTypography from './Typography';
import Text from './Text';
import Title from './Title';
import Paragraph from './Paragraph';
import * as VarnishAdditions from './varnish'; // Added by Varnish

export type TypographyProps = typeof OriginTypography & {
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

const Typography = OriginTypography as TypographyProps;
Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;
Object.assign(Typography, VarnishAdditions); // Added by Varnish

export default Typography;

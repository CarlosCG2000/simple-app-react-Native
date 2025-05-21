
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = (props) => (
 <Entypo name="home" size={32} color="white" {...props} />
);

export const InfoIcon = (props) => (
<AntDesign name="infocirlce" size={32} color="white" {...props} />
)

export const SvgIcon = (props) => (
    <Svg>
        <Path d="M12 2L2 12h3v8h6v-6h4v6h6v-8h3L12 2z" fill="white" {...props} />
    </Svg>
)
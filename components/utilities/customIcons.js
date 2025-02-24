import React from 'react';
import Icon from '@ant-design/icons';

const avatarSvg = () => (
	<svg width="42px" height="41px" viewBox="0 0 42 41">
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="avagar" transform="translate(0.489436, 0.000000)">
				<circle id="Oval" fill="#ECECEC" cx="20.5" cy="20.5" r="20.5"></circle>
				<path d="M20.7096082,0.00303207881 C9.46617432,-0.189058296 0.19512446,8.7700368 0.00303408548,20.0134706 C-0.106073248,26.388566 2.73532758,32.1182377 7.25944009,35.9285424 C7.55525927,35.6703729 7.87259257,35.4337176 8.2252705,35.2416272 L14.3007049,31.927684 C15.0974958,31.4927914 15.5938573,30.6575825 15.5938573,29.7493792 L15.5938573,27.2598879 C15.5938573,27.2598879 13.8104903,25.1269164 13.1304904,22.1633461 C12.566513,21.7983744 12.1884792,21.1675496 12.1884792,20.4491316 L12.1884792,17.7245217 C12.1884792,17.1251997 12.4551006,16.5896518 12.8692474,16.2146914 L12.8692474,12.2760703 C12.8692474,12.2760703 12.0601628,6.14685063 20.3607721,6.14685063 C28.6613814,6.14685063 27.8522967,12.2760703 27.8522967,12.2760703 L27.8522967,16.2146914 C28.2672119,16.5896518 28.533065,17.1251997 28.533065,17.7245217 L28.533065,20.4491316 C28.533065,21.3650185 27.9183758,22.1356851 27.0839352,22.3930862 C26.6190765,23.8383742 25.9482969,25.2160463 25.0616077,26.4684756 C24.8380145,26.7842722 24.6290202,27.051662 24.4461502,27.2598879 L24.4461502,29.8123848 C24.4461502,30.752091 24.977088,31.6118875 25.8176754,32.0314129 L32.3233923,35.2838871 C32.7137199,35.4790509 33.0663978,35.7256949 33.3914148,36 C37.7787589,32.3410625 40.6132445,26.8703287 40.71851,20.7096061 C40.9121371,9.46617231 31.9538104,0.195122454 20.7096082,0.00303207881 Z" id="Path" fill="#556080" fillRule="nonzero"></path>
			</g>
		</g>
	</svg>
);

export const AvatarPlaceholder = props => <Icon component={avatarSvg} {...props} />;

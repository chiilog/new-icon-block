import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<p { ...blockProps }>
			<RichText
				value={ title }
				onChange={ ( value ) => { console.log( value ) } }
			/>
		</p>
	);
}

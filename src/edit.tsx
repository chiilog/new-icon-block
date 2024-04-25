import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import { PanelBody, TextControl } from '@wordpress/components';

type BlockAttributes = {
	text: string;
	period: string;
};

export default function Edit( {
	attributes: { text, period },
	setAttributes,
}: BlockEditProps< BlockAttributes > ) {
	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody
					title="Settings"
					initialOpen={ true }
				>
					<TextControl
						label="Period to display Text"
						value={ period }
						onChange={ ( value ) =>
							setAttributes( { period: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<RichText
					value={ text }
					onChange={ ( value ) => {
						setAttributes( { text: value } );
					} }
				/>
			</div>
		</>
	);
}

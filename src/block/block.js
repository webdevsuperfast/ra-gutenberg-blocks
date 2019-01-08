/**
 * BLOCK: ra-gutenberg-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'ra-gutenberg-blocks/block-ra-headline-block', {
	title: __( 'RA Headline', 'ra-gutenberg-blocks' ),
	description: __( 'A simple heading block', 'ra-gutenberg-blocks' ),
	icon: 'editor-kitchensink',
	category: 'layout',
	attributes: {

	},
	edit() {
		return <h1>This is a headline</h1>;
	},
	save() {
		return <h1>This is a headline</h1>
	}
} );

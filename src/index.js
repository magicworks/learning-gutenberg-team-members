import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('learning-gutenberg/team-members', {
	edit: Edit,
	save,
});

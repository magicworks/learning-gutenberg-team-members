import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
// import './style.scss';

registerBlockType('learning-gutenberg/team-member', {
	title: __('Team Member', 'team-members'),
	description: __('A team member item', 'team-member'),
	icon: 'admin-users',
	parent: ['learning-gutenberg/team-members'],
	supports: {
		reusable: false,
		html: false,
	},
	usesContext: ['learning-gutenberg/team-members-columns'],
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		id: {
			type: 'number',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		socialLinks: {
			type: 'array',
			default: [],
			source: 'query',
			selector:
				'.wp-block-learning-gutenberg-team-member-social-links ul li',
			query: {
				icon: {
					source: 'attribute',
					attribute: 'data-icon',
				},
				link: {
					source: 'attribute',
					selector: 'a',
					attribute: 'href',
				},
			},
		},
	},
	edit: Edit,
	save: Save,
});

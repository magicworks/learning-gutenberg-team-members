import { createBlock, registerBlockType } from '@wordpress/blocks';
import './team-member';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('learning-gutenberg/team-members', {
	edit: Edit,
	save,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/gallery'],
				transform: ({ images, columns }) => {
					const innerBlocks = images.map(({ url, id, alt }) => {
						return createBlock('learning-gutenberg/team-member', {
							alt,
							id,
							url,
						});
					});
					return createBlock(
						'learning-gutenberg/team-members',
						{
							columns: columns || 2,
						},
						innerBlocks
					);
				},
			},
			{
				type: 'block',
				blocks: ['core/image'],
				isMultiBlock: true,
				transform: (attributes) => {
					const innerBlocks = attributes.map(({ url, id, alt }) => {
						return createBlock('learning-gutenberg/team-member', {
							alt,
							id,
							url,
						});
					});
					return createBlock(
						'learning-gutenberg/team-members',
						{
							columns:
								attributes.length > 3 ? 3 : attributes.length,
						},
						innerBlocks
					);
				},
			},
		],
	},
});

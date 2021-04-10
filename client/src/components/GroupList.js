import React from 'react';
import { GroupListItem } from './index';

const GroupList = () => {
	const groups = [
		{
			name: 'The Rocinante Crew',
			members: ['James Holden', 'Amos Burton', 'Naomi Nagata', 'Alex Kamal'],
		},
		{
			name: 'United Nations Navy',
			members: [
				'Chrisjen Avasarala',
				'Agusto Nguyen',
				'Michael Souther',
				'Felix Delgado',
			],
		},
		{
			name: 'Martian Congressional Republic Navy',
			members: ['Bobby Draper', 'Emil Sauveterre', 'Theresa Yao', 'Alex Kamal'],
		},
		{
			name: 'Outer Planets Alliance',
			members: [
				'Fred Johnson',
				'Anderson Dawes',
				'Naomi Nagata',
				'Klaes Ashford',
				'Marco Inaros',
			],
		},
	];

	return (
		<ul style={{ marginTop: '10%' }}>
			{groups.map((group) => (
				<GroupListItem group={group} />
			))}
		</ul>
	);
};

export default GroupList;

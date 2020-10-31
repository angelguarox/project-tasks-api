create database projectstasks;

use projectstasks;

create table projects(
	id int not null primary key auto_increment,
	name text not null,
	priority int not null,
	description text not null,
	deliverydate date not null
);

create table tasks(
	id int not null primary key auto_increment,
	name text not null,
	done boolean not null,
	projectId int not null,
	foreign key (projectId) references projects (id)
	on delete cascade on update cascade
);

insert into projects (name, priority, description, deliverydate) values ('Make a web app', 1, 'Using JavaScript', '2020-06-28');
insert into projects (name, priority, description, deliverydate) values ('Make an app', 1, 'Using React Native', '2020-06-29');
insert into projects (name, priority, description, deliverydate) values ('Make a desktop app', 2, 'Using C++', '2020-06-30');

insert into tasks (name, done, projectId) values ('Download Vuejs', false, 1);
insert into tasks (name, done, projectId) values ('Create UI web', false, 1);
insert into tasks (name, done, projectId) values ('Download Flutter', false, 2);
insert into tasks (name, done, projectId) values ('Design UI', false, 2);
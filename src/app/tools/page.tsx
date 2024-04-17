'use client';
import React from 'react';
import { NextPage } from 'next';
import { Logo } from '@/icons/Logo';
import { HomeIcon } from '@/icons/Home';
import { CategoryIcon } from '@/icons/Category';
import { TaskIcon } from '@/icons/Task';
import { TeamIcon } from '@/icons/Team';

const ListLink = ({
  title,
  selected,
  children,
}: {
  title: string;
  selected: boolean;
  children: React.ReactNode;
}) => (
  <a
    role="option"
    aria-selected={selected}
    aria-labelledby="react-aria586692381-:r9:"
    href="#"
    tabIndex={-1}
    data-key="home"
    id="react-aria586692381-:r4:-option-home"
    title={title}
    data-selectable="true"
    data-selected={selected}
    className="flex group gap-2 items-center justify-between relative py-1.5 w-full box-border subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground px-3 min-h-11 rounded-large h-[44px] data-[selected=true]:bg-default-100"
  >
    {children}
  </a>
);

const ListLinkTitle = ({ title }: { title: string }) => (
  <span className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground">
    {title}
  </span>
);

const Tools: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-screen w-full">
        <div className="hidden h-full overflow-x-hidden sm:flex !border-r-small border-divider">
          <div className="relative flex h-full w-72 flex-1 flex-col p-6">
            <a href="/">
              <div className="flex items-center gap-2 px-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full">
                  <Logo size={36} />
                </div>
                <span className="text-medium font-bold">Discord Toolbox</span>
              </div>
            </a>
            <span aria-hidden="true" className="w-px h-px block ml-1 mt-8" />
            <div data-slot="base" className="w-full relative flex flex-col gap-1 p-1 list-none">
              <nav
                data-slot="list"
                className="w-full flex flex-col gap-0.5 outline-none items-center"
                role="listbox"
                id="react-aria586692381-:r4:"
                tabIndex={0}
              >
                <li data-slot="base" role="presentation" className="relative mb-2 w-full">
                  <span className="pl-1 text-tiny text-foreground-500">General</span>
                  <ul className="data-[has-title=true]:pt-1" data-has-title="true">
                    <ListLink title="Home" selected>
                      <HomeIcon width={24} height={24} />
                      <ListLinkTitle title="Home" />
                    </ListLink>
                    <ListLink title="Category" selected={false}>
                      <CategoryIcon width={24} height={24} />
                      <ListLinkTitle title="Projects" />
                    </ListLink>
                    <ListLink title="Task" selected={false}>
                      <TaskIcon width={24} height={24} />
                      <ListLinkTitle title="Task" />
                    </ListLink>
                    <ListLink title="Team" selected={false}>
                      <TeamIcon width={24} height={24} />
                      <ListLinkTitle title="Team" />
                    </ListLink>
                  </ul>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex-col py-2">
          <header className="flex h-16 items-center gap-2 border-b-small border-divider px-4">
            <button
              className="z-50 pb-2 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-tiny gap-unit-2 rounded-small px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 min-w-unit-8 w-unit-8 h-unit-8 flex sm:hidden"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="text-default-500 iconify iconify--solar"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h2 className="text-medium font-medium text-default-700 pb-2">Overview</h2>
          </header>
          <main className="mt-4 w-full overflow-visible pl-4">Childs</main>
        </div>
      </div>
    </div>
  );
};

export default Tools;

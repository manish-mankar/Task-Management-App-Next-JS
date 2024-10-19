## Task Management App - React JS & Next JS (Josh Talk - Frontend Developer Assignment)

## Tech Stack 

- HTML, CSS, Tailwind CSS, JavaScript, React JS, Next JS and Typescript.

## Approach to build a task management app

1.Set up the project:

- Create a new Next.js project with React JS & TypeScript and Tailwind CSS.
- Install necessary dependencies like shadcn/ui components and Framer Motion.
- TypeScript is used to define the static types (e.g String, Number, Boolean)

2.Create the main components:

- TaskList: To display all tasks.
- TaskItem: To represent individual tasks.
- TaskForm: To add new tasks.
- SearchBar: To filter tasks.

3.Implement the core functionality:

- Create a state to store tasks in the main component.
- Implement functions for adding, editing, deleting, and toggling task completion.
- Used local storage to persist user credentials across page reloads.

4.Add sorting and filtering:

- Implement sorting by priority and title.
- Add a search function to filter tasks by title or description.

5.Enhance the UI:

- Use shadcn/ui components for a polished look.
- Add animations with Framer Motion for a more engaging user experience.

6.Responsive across different screen sizes:

- Use Tailwind CSS classes to ensure the app looks good on all device sizes.

7.Implement server-side rendering:

- Use Next.js's getServerSideProps to load initial tasks.

## Third Party Packages 

- Shadcn Ui, framer-motion, clsx, tailwind-merge

## Setup Instructions

1. Install Dependencies:

- `npm install`: Install dependencies.

2. Start the development server:

- `npm run dev`: Runs the app in development mode.

3. Open your browser and visit `http://localhost:3000` to view the application.

4.In the project directory, you can run:

- `npm run build`: Builds the app for production to the `dist` folder.

## Project Hierarchy

task-management-app/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── checkbox.tsx
│   │   └── card.tsx
│   ├── TaskList.tsx
│   ├── TaskItem.tsx
│   ├── TaskForm.tsx
│   └── SearchBar.tsx
├── lib/
│   └── utils.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── components.json

## Customizing the Project

- Edit `pages/index.tsx` to modify the main application component.
- Add new components in the `components/` directory.
- Modify `styles/globals.css` for global styles.
- API Routes `pages/api`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

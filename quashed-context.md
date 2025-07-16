# Quashed Take-Home Test Context

## Project Overview
This is a take-home coding challenge for Quashed, a company aiming to shake up the insurance world in New Zealand. The test is designed to simulate complex UI and state management challenges.

**Deadline**: July 22nd, midnight

## Evaluation Criteria

### 1. Pixel-Perfect UI Implementation
- Accurately translate Figma design
- Responsiveness and visual polish
- Attention to smallest details

### 2. Complex State Management
- Clarity, correctness, and maintainability of state logic
- **Preference for Redux** (as explicitly mentioned)
- Rationale for chosen approach

### 3. React Component Architecture
- Modularity
- Reusability
- Clean data flow

### 4. Code Quality & Best Practices
- Readability
- Performance considerations
- Overall maintainability

### 5. Development Process
- Git commit history
- Structured approach to building the solution

## Tech Stack Decisions

### Core Setup
- **Build Tool**: Vite (chosen for performance and modern tooling)
- **Framework**: React with TypeScript
- **State Management**: Redux Toolkit (per their preference)
- **Styling**: Tailwind CSS (for pixel-perfect implementation)

### Already Installed
```json
{
  "dependencies": {
    "react": "latest",
    "react-dom": "latest",
    "redux": "latest",
    "@reduxjs/toolkit": "latest",
    "react-redux": "latest"
  },
  "devDependencies": {
    "tailwindcss": "latest",
    "postcss": "latest",
    "autoprefixer": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest"
  }
}
```

## Project Structure Recommendations

```
src/
├── components/        # Reusable UI components
├── features/         # Feature-based modules
├── store/           # Redux store configuration
├── hooks/           # Custom React hooks
├── utils/           # Helper functions
├── types/           # TypeScript type definitions
└── api/             # API client and mock data
```

## Full-Stack Considerations
While the challenge focuses on frontend, they mentioned this is a full-stack role. Consider:
- Setting up a simple Express server in `/server` directory
- Creating mock API endpoints
- Demonstrating data fetching patterns

## Key Requirements from Job Description

### Must-Have Frontend Skills
1. **React.js Expertise**: Implement pixel-perfect UI components from Figma
2. **Design Translation**: Interpret design requirements and maintain clear communication
3. **Performance Optimization**: Optimize large, complex React applications

## Git Strategy
- Make meaningful, atomic commits
- Use clear commit messages
- Show iterative development process
- Consider using conventional commits format

## Next Steps
1. Set up Redux store with Redux Toolkit
2. Create base component structure
3. Implement routing if needed (React Router)
4. Start translating Figma designs to components
5. Set up mock API if demonstrating full-stack capabilities

## Important Notes
- They have already sent a Figma file with components and flow
- Submission via private GitHub repository
- Grant access to Wenbo when complete
- Focus on exceptional quality over rushed completion

## Performance Optimization Considerations
- Code splitting
- Lazy loading
- Memoization where appropriate
- Optimized re-renders
- Bundle size optimization

## Additional Libraries to Consider
- React Router DOM (for routing)
- Axios or React Query (for data fetching)
- React Hook Form (for complex forms)
- Framer Motion (for animations, if in design)

## Questions to Consider While Building
1. Is the state management clear and scalable?
2. Are components truly reusable?
3. Is the code self-documenting?
4. Are there performance bottlenecks?
5. Does the implementation match Figma exactly?
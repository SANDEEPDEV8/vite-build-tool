import { defineConfig, loadEnv } from "vite";

// export default defineConfig({
//   // base : "/" //if deployed in skan.gitgub.io
//   base: "/vite-project", //if deployed in skan.github.io/vite-project  in local its http://127.0.0.1:5173/vite-project
//   //also when using img tag <img src="./vite.svg" wont work, use absolute path <img src="vite.svg"

// });

/*
export default defineConfig({
  base: "/vite-project", 
});

you can write like this but no intellicense
*/

/*

//in only prod use /vite-project/ as base url
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(command, mode, ssrBuild);
  if (mode === "production") {
    return {
      base: "/vite-project/",
    };
  }
  return {};
});
*/

/*
//api call in config
export default defineConfig(async ({ command, mode }) => {
    const data= await someAsyncFunction()
    
    return {

    };
  });
  */

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd, ""); //"" means load all env valiables regardless of VITE_
  console.log(env);
  return {
    //clearScreen:false//wont make console clear on reload
    //envPrefix: "APP_", //default IS VITE_ .  dont keep empty
    css: {
      devSourcemap: true, // this will add scss source map to browser for debug
    },
    server: {
      open: "inden.html", //automatially open browser
      port: 3000, //npm run dev
    },
    preview: {
      port: 8080, //npm run preview
      strictPort: true, // this wont take next port if 8080 not available
    },
    logLevel: "silent", //less verbose  //info(default), warn, error, silent
    envDir: "direnv", //path where .env files exists
  };
});

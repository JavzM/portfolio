import Javascript from "./Javascript.astro";
import Typescript from "./Typescript.astro";
import React from "./React.astro";
import Tailwind from "./Tailwind.astro";
import Bootstrap from "./Bootstrap.astro";
import Spring from "./Spring.astro";
import Dotnet from "./Dotnet.astro";
import Laravel from "./Laravel.astro";
import Mssql from "./Mssql.astro";
import Mysql from "./Mysql.astro";
import Postgresql from "./Postgresql.astro";
import Kotlin from "./Kotlin.astro";
import Compose from "./Compose.astro";
import Git from "./Git.astro";
import Docker from "./Docker.astro";
import Figma from "./Figma.astro";

export const ICONS = {
  Javascript,
  Typescript,
  React,
  Tailwind,
  Bootstrap,
  Spring,
  Dotnet,
  Laravel,
  Mssql,
  Mysql,
  Postgresql,
  Kotlin,
  Compose,
  Git,
  Docker,
  Figma,
} as const;

export type IconName = keyof typeof ICONS;

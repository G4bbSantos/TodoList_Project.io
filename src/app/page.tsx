'use client'

import { FooterPage } from "@/components/footer";
import { HeaderPage } from "@/components/HeaderPage";
import { ListRedAct } from "@/Utils/ListRedAct";

 export default function home () {
    return(
      <div className="w-full min-h-screen bg-neutral-300 dark:bg-neutral-800 flex flex-col justify-between ">
          <HeaderPage/>
          <div className="min-h-96 flex flex-col justify-start gap-7">
            <ListRedAct/>
          </div>
          <FooterPage/>
      </div>
    )
 }
'use client'
import Image from 'next/image'
import { devtools, exp, userinfo } from './datas'
import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Facebook, FacebookIcon, Github, Instagram, LucideFacebook } from 'lucide-react'

export default function Home() {

	const [datas, setDatas] = useState(devtools)

	return (
		<main className="">
			<div>
				<div className='bg-zinc-100 flex shadow-md justify-between p-4' style={{ height: 500 ,maxHeight: 1000 }}>
					<div className='p-5'>
						<div className='flex align-middle text-slate-700 p-5 pb-0 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl'>
							{userinfo?.name}
						</div>
						<p className='flex justify-end'>FRONTEND DEVELOPER</p>
						<div>
							<div className='bg-violet-50 inline-block p-4 shadow-lg rounded-2xl'>
								<Badge>
									Skills
								</Badge>
								<div className='flex'>
									{userinfo.skills.map((skill, sidx) => (
										<div className='m-2 flex align-middle'>
											<img width={24} className='object-contain' src={skill.logo}/>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className='mt-5'>
							<div className='bg-green-50 inline-block p-4 shadow-lg rounded-2xl'>
								<Badge>
									Contact
								</Badge>
								<div className='flex'>
									<a href={userinfo.contact.facebook} target='_blank' className='m-2 flex align-middle border rounded-full shadow-md p-2'>
										<Facebook strokeWidth={1} />
									</a>
									<a href={userinfo.contact.github} target='_blank' className='m-2 flex align-middle border rounded-full shadow-md p-2'>
										<Github strokeWidth={1} />
									</a>
									<a href={userinfo.contact.instagram} target='_blank' className='m-2 flex align-middle border rounded-full shadow-md p-2'>
										<Instagram strokeWidth={0.9} />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='p-10 inline-flex' style={{ height: 500 }}>
							<img
								src={userinfo?.pic}
								width={400}
								className='shadow-2xl shadow-green-100'
								style={{ borderRadius: '50%', objectFit: 'cover'}}
								// style={{ zIndex: -9999, objectFit: 'cover' }}
							/>
						</div>

					</div>
				</div>
				<div>
					<div className='text-slate-700 p-5 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl'>
						Туршлага
					</div>
					<div className='flex flex-wrap'>
						{exp.map((xp, order) => (
							<div className='flex m-5 rounded-xl shadow-md flex-col relative overflow-hidden height-auto text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none w-full h-[300px] col-span-12 sm:col-span-7'  key={order} style={{ minHeight: 100, minWidth: 250, maxWidth: 400 }}>
								<div className='pt-0 font-bold flex p-3 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large absolute z-10 top-1 flex-col items-end'>
									<h4 class="font-medium text-slate-500 text-xl">{xp?.title}</h4>
								</div>
								<img
									style={{ objectFit: 'cover' }}
									src={xp?.pic}
									width={300}
									className='relative opacity-1 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 w-full h-full object-cover'
								/>
								<div className='p-3 h-auto flex  w-full justify-between items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-black/10 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
									<p className='text-slate-700 '>{xp?.desc}</p>
									<a role='button' href={xp?.url} target='_blank' className='bg-zinc-200 rounded-xl shadow-xl px-2'>
										Үзэх
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}

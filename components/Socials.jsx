'use client'

import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,
} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: `https://www.linkedin.com/in/sylvester-akrong-44ab4a203`,
    name: <RiLinkedinFill/>
  },
  {
    path: `https://github.com/sylvesterakrong`,
    name: <RiGithubFill/>
  },
  {
    path: `https://x.com/sen__sly`,
    name: <  RiTwitterFill/>
  },
  {
    path: `https://www.instagram.com/sen__sly/`,
    name: <RiInstagramFill/>
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return(
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>
              {icon.name}
            </div>
          </Link>
        )
      })}

    </div>
  )
}

export default Socials
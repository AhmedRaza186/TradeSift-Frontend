


import dashboardSvg_dark from '../../../assets/dahsboard-preview-dark.svg'
import dashboardSvg_light from '../../../assets/dahboard-preview-light.svg'

const DashboardPreview = ({theme = 'dark'})=>{
  const isDark =theme === 'dark'
  return(
    <div className="relative z-10 mt-10 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24">
  <div className="mx-auto w-full max-w-[1280px]">
    <img
      src={isDark?dashboardSvg_dark:dashboardSvg_light}
      alt="TradeSift Dashboard"
      className="
        w-full
        h-auto
        object-contain
        select-none
        pointer-events-none
        drop-shadow-[0_30px_80px_rgba(0,0,0,0.18)]
      "
      loading="lazy"
      draggable={false}
    />
  </div>
</div>
  )
}

export default DashboardPreview
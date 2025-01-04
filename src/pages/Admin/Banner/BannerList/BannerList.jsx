import Item from '~/pages/Admin/Banner/BannerList/Item/Item'

export default function BannerList({ listBanners, onDelete, confirm }) {
  return (
    <div className='grid grid-cols-3 gap-2 mt-3'>
      {listBanners.length > 0 &&
        listBanners.map((banner, index) => (
          <>
            <Item banner={banner} onDelete={onDelete} confirm={confirm} />
          </>
        ))}
    </div>
  )
}

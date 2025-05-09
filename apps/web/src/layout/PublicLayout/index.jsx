import Header from "../../components/Header";

function PublicLayout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <main>
        {children}
      </main>
    </>
  )
}

export default PublicLayout;
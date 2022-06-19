import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>index @ nocto.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='content'>
        <h3 className='name'>Patryk "suprenoctome" Haufa</h3>
        <div className='ascii-art'>
                          @@@@#(((((((((((((((@@@@<br />           
                      *@@((((((((((((((((((((((((((((#%@@<br />            
                    @@(((((((((((((((((((((((((((((((((((###@<br />         
                  @,(((((((((((((((((((((((((((((((((((((((###%@<br />      
              .@,(((((((((((((((((((((((((((((((((((((((((((##,,@<br />    
              @,((((((((((((((((((((((((((((((((((((((((((((( ,,,,@<br />   
            @.(((((@@        (@#(((((((((((((((((@(((((((((@  .,,,%.<br /> 
            @.(((@                @#((((((((((((@....(%(((@.    .,,,@<br /> 
          @,((@                    .@...@@(((@.........@..@   (&&,,,@<br />
          @*(@                       .@...................@   ( %&,,&<br />
          *&((@             %&&&&       @,................./  %&@@&(,.<br />
          /&(&             @    &&&       @.......,@#/#@.../  @&@@&/,*<br />
          @(@             @&%#&&&&&       @...*,,...,.***@@  /%@@%,,@<br />
          @#(#            @&&@@@@&&%       @.@,.......,,**@   &%%,, %<br />
            @(@             &&&@@@%%@        @.,,......,,***%,,,,,, @<br /> 
            @(@             &%%%%%%/         @*,,,,,,,,,,*@,,,,,,.&<br />  
              .@(@             @%%&            @/********@.,,,,,.@<br />    
                @(@                                ,,,,,,,,,, @<br />      
                    @#@                              ,,,,,,*@<br />         
                        @@@@@,                  ,,,,,,#@@%%%%@<br />        
                    @.*((@(((((####%&@@@@@@@&%%##############@<br />       
              @@@.@**(#@..,@((((((((((((########@#############@<br />      
          @@@&@(@**(@ ......@(((((((((((((((###@..@@#########@*@<br />     
          @((((@*(@ .........,&@##(((((((####@......***@@@@%(***@<br />   
        </div>
      </div>
      <div className="content">
        <div className="links">
          <h3>Discord: nocto#7292</h3>
          <h4>Email: suprenoctome@gmail.com</h4>
          <div className="buttons">
            <Link href='https://blog.nocto.dev' passHref>
              <button className="btn">Blog</button>
            </Link>
            <Link href='https://tryhackme.com/p/suprenoctome' passHref>
              <button className="btn">TryHackMe</button>
            </Link>
            <Link href='https://github.com/suprenoctome' passHref>
              <button className="btn">GitHub</button>
            </Link>
            <Link href='https://twitter.com/suprenoctome' passHref>
              <button className="btn">Twitter</button>
            </Link>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

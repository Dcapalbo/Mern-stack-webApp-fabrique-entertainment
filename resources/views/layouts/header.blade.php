<header>
 {{-- header top  --}}
 <div class="header_top">
  {{-- header wrapper --}}
  <div class="header_wrapper">
  {{-- logo fabrique --}}
   <div class="logo_fabrique">
    <img src="{{asset('/img/fabrique/LOGO_Fabrique_Entertainment_White.png')}}" alt="logo_fabrique_entertainment">
   </div>
   {{-- logo fabrique --}}
   {{-- navbar --}}
   <nav class="header_nav">
    <li><a href='{{route('home')}}'>Home</a></li>
    <li><a href='{{route('about')}}'>About</a></li>
    <li><a href='{{route('projects')}}'>Projects</a></li>
    <li><a href='{{route('news')}}'>News</a></li>
    <li><a href='{{route('contacts')}}'>Contacts</a></li>
   </nav>
   {{-- end navbar --}}
  </div>
  {{-- end wrapper --}}
 </div>
 {{-- end header top --}}
</header>
{{-- end header --}}

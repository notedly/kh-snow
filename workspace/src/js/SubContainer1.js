import React , { Component } from 'react' ; 
import ReactDOM , { render } from 'react-dom' ; 
import Top from './include/Top' ; 
import Btm from './include/Btm' ; 

class WrapContainer extends Component {
	render () {
		return ([
			<Top key="Top" /> , 
			<div key="WrapContainer" id="container">
				WrapContainer In
				<p>컨텐츠가 많아질 경우 자동으로 스크롤바가 생성됩니다.</p>

				<ul>
					<li>temp text1</li>
					<li>temp text2</li>
					<li>temp text3</li>
					<li>temp text4</li>
					<li>temp text5</li>
					<li>temp text6</li>
					<li>temp text7</li>
					<li>temp text8</li>
					<li>temp text9</li>
					<li>temp text10</li>
					<li>temp text11</li>
					<li>temp text12</li>
					<li>temp text13</li>
					<li>temp text14</li>
					<li>temp text15</li>
					<li>temp text16</li>
					<li>temp text17</li>
					<li>temp text18</li>
					<li>temp text19</li>
					<li>temp text20</li>
					<li>temp text21</li>
					<li>temp text22</li>
					<li>temp text23</li>
					<li>temp text24</li>
					<li>temp text25</li>
					<li>temp text26</li>
					<li>temp text27</li>
					<li>temp text28</li>
					<li>temp text29</li>
					<li>temp text30</li>
					<li>temp text31</li>
					<li>temp text32</li>
					<li>temp text33</li>
					<li>temp text34</li>
					<li>temp text35</li>
					<li>temp text36</li>
					<li>temp text37</li>
					<li>temp text38</li>
					<li>temp text39</li>
					<li>temp text40</li>
					<li>temp text41</li>
					<li>temp text42</li>
					<li>temp text43</li>
					<li>temp text44</li>
					<li>temp text45</li>
					<li>temp text46</li>
					<li>temp text47</li>
					<li>temp text48</li>
					<li>temp text49</li>
					<li>temp text50</li>
					<li>temp text51</li>
					<li>temp text52</li>
					<li>temp text53</li>
					<li>temp text54</li>
					<li>temp text55</li>
					<li>temp text56</li>
					<li>temp text57</li>
					<li>temp text58</li>
					<li>temp text59</li>
					<li>temp text60</li>
					<li>temp text61</li>
					<li>temp text62</li>
					<li>temp text63</li>
					<li>temp text64</li>
					<li>temp text65</li>
					<li>temp text66</li>
					<li>temp text67</li>
					<li>temp text68</li>
					<li>temp text69</li>
					<li>temp text70</li>
					<li>temp text71</li>
					<li>temp text72</li>
					<li>temp text73</li>
					<li>temp text74</li>
					<li>temp text75</li>
					<li>temp text76</li>
					<li>temp text77</li>
					<li>temp text78</li>
					<li>temp text79</li>
					<li>temp text80</li>
					<li>temp text81</li>
					<li>temp text82</li>
					<li>temp text83</li>
					<li>temp text84</li>
					<li>temp text85</li>
					<li>temp text86</li>
					<li>temp text87</li>
					<li>temp text88</li>
					<li>temp text89</li>
					<li>temp text90</li>
					<li>temp text91</li>
					<li>temp text92</li>
					<li>temp text93</li>
					<li>temp text94</li>
					<li>temp text95</li>
					<li>temp text96</li>
					<li>temp text97</li>
					<li>temp text98</li>
					<li>temp text99</li>
					<li>temp text100</li>
				</ul>
			</div> , 
			<Btm key="Btm" /> , 
		]) ; 
	}
}

window.addEventListener( 'load' , () => {
	render( <WrapContainer /> , document.body.querySelector( '#wrapBox' ) ) ; 
}) ; 
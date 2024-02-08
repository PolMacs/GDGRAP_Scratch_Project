#version 330 core

out vec4 FragColor; // Returns a color

//Texture to be passed
uniform sampler2D tex0;

//Should receive the texCoord from vertex shader
in vec2 texCoord;

//Simple shader that colors the model 
void main()
{
	//				  R   G   B  a  Ranges from 0->1
	//FragColor = vec4(texCoord.x,texCoord.y,0.5f,1.0f); //Sets the color of the fragment

	//Assign the texture color using the function
	FragColor = texture(tex0, texCoord);
}

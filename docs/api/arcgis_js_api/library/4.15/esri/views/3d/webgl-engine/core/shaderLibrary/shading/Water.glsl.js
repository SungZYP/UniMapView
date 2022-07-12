// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/makeTemplateObjectHelper ./Gamma.glsl ./PhysicallyBasedRendering.glsl ../../shaderModules/interfaces".split(" "),function(h,a,d,e,f,g){Object.defineProperty(a,"__esModule",{value:!0});a.Water=function(b,a){b.include(f.PhysicallyBasedRendering,a);b.include(e.Gamma);b.fragment.code.add(g.glsl(c||(c=d(["\n    const vec3 fresnelSky \x3d  vec3(0.02, 1.0, 5.0); // f0, f0max, exp\n    const vec2 fresnelMaterial \x3d  vec2(0.02, 0.1); // f0, f0max for specular term\n    const float roughness \x3d 0.06;\n\n    const vec3 skyZenitColor \x3d vec3(0, 0.6, 0.9);\n    const vec3 skyColor \x3d vec3(0.72, 0.92, 1.0);\n\n    PBRShadingWater shadingInfo;\n\n    /*\n    *   This function is an approximation for the sky gradient reflected\n    *   the water surface and describes a combination of two fresnel terms.\n    *   @parameter: cosTheta \x3d is the result of max(dot(n,v), 0.0)\n    *   @parameter: horizon \x3d the dominant color of the sky horizon\n    *   @parameter: cosTheta \x3d the dominant color of the sky zenit\n    */\n    vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {\n      float exponent \x3d pow((1.0 - cosTheta), fresnelSky[2]);\n      return mix(zenit, horizon, exponent);\n    }\n\n    /*\n    *   This function determines the water color per pixel.\n    *   @parameter: n \x3d normal facing away from the surface\n    *   @parameter: v \x3d view direction facing away from the surface.\n    *   @parameter: l \x3d light direction facing away from the surface\n    *   @parameter: lightIntensity \x3d light intensity, currently between 0...PI\n    *   @parameter: localUp \x3d a normal for the general direction of the surface\n    *   @parameter: shadow \x3d the amount of shadow at this pixel (0 \x3d no shadow)\n    */\n    vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow) {\n\n      vec3 seaWaterColor \x3d linearizeGamma(color);\n      // using half vector to determine the specular light\n      vec3 h \x3d normalize(l + v);\n      shadingInfo.NdotL \x3d clamp(dot(n, l), 0.0, 1.0);\n      shadingInfo.NdotV \x3d clamp(dot(n, v), 0.001, 1.0);\n      shadingInfo.VdotN \x3d clamp(dot(v, n), 0.001, 1.0);\n      shadingInfo.NdotH \x3d clamp(dot(n, h), 0.0, 1.0);\n      shadingInfo.VdotH \x3d clamp(dot(v, h), 0.0, 1.0);\n      shadingInfo.LdotH \x3d clamp(dot(l, h), 0.0, 1.0);\n\n      // angle between vertex normal and view direction\n      float upDotV \x3d max(dot(localUp,v), 0.0);\n      // reflected sky color: the reflected sky color consists of two main colors, the\n      // reflected color at the horizon and the reflected color of the zenit.\n      // the reflected sky color is then an approximation based on the fresnel term.\n      vec3 skyHorizon \x3d linearizeGamma(skyColor);\n      vec3 skyZenit \x3d linearizeGamma(skyZenitColor);\n      vec3 skyColor \x3d getSkyGradientColor(upDotV, skyHorizon, skyZenit );\n\n      // we use the upDotL to smoothen out the\n      // reflected color of the water\n      float upDotL \x3d max(dot(localUp,l),0.0);\n\n      // The approximated sky color is adjusted according to the sun position.\n      // This is done as approximation for e.g. night views.\n      skyColor *\x3d 0.1 + upDotL * 0.9;\n\n      // If a water surface is in shadow we just use a slight darkening of the\n      // water surface expressed with this shadowModifier.\n      float shadowModifier \x3d clamp(shadow, 0.8, 1.0);\n\n      // The reflected sky color consists of the fresnel reflection multiplied with the approximated sky color.\n      // The shadow is influencing the frensel term to keep the shadow impression for really near views. As long\n      // as reflection are absent there is a need to have a slight shadow for depth perception.\n      vec3 reflSky \x3d fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]) * skyColor * shadowModifier;\n\n      // The reflected sea color is the input water color combined with the reflected sky color.\n      // The reflected sky color is modified by the incoming light.\n      vec3 reflSea \x3d seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;\n\n      vec3 specular \x3d vec3(0.0);\n      // This prevents the specular light to be rendered when:\n      // - sun is behind a polygon (e.g. sundown for elevated polygons where nDotL might be still ok)\n      // - viewer is under water (for this localUp is better than n)\n      if(upDotV \x3e 0.0 \x26\x26 upDotL \x3e 0.0) {\n        // calculate the cook torrance BRDF but with simplified occlusion\n        vec3 specularSun \x3d brdfWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);\n        // Normalize light intensity to be between 0...1. Shadow cancels out specular light here\n        vec3 incidentLight \x3d lightIntensity * LIGHT_NORMALIZATION * shadow;\n\n        specular \x3d shadingInfo.NdotL * incidentLight * specularSun;\n      }\n      // combining reflected sky, reflected sea and specular highlight.\n      return tonemapACES(reflSky + reflSea + specular);\n    }\n  "],
["\n    const vec3 fresnelSky \x3d  vec3(0.02, 1.0, 5.0); // f0, f0max, exp\n    const vec2 fresnelMaterial \x3d  vec2(0.02, 0.1); // f0, f0max for specular term\n    const float roughness \x3d 0.06;\n\n    const vec3 skyZenitColor \x3d vec3(0, 0.6, 0.9);\n    const vec3 skyColor \x3d vec3(0.72, 0.92, 1.0);\n\n    PBRShadingWater shadingInfo;\n\n    /*\n    *   This function is an approximation for the sky gradient reflected\n    *   the water surface and describes a combination of two fresnel terms.\n    *   @parameter: cosTheta \x3d is the result of max(dot(n,v), 0.0)\n    *   @parameter: horizon \x3d the dominant color of the sky horizon\n    *   @parameter: cosTheta \x3d the dominant color of the sky zenit\n    */\n    vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {\n      float exponent \x3d pow((1.0 - cosTheta), fresnelSky[2]);\n      return mix(zenit, horizon, exponent);\n    }\n\n    /*\n    *   This function determines the water color per pixel.\n    *   @parameter: n \x3d normal facing away from the surface\n    *   @parameter: v \x3d view direction facing away from the surface.\n    *   @parameter: l \x3d light direction facing away from the surface\n    *   @parameter: lightIntensity \x3d light intensity, currently between 0...PI\n    *   @parameter: localUp \x3d a normal for the general direction of the surface\n    *   @parameter: shadow \x3d the amount of shadow at this pixel (0 \x3d no shadow)\n    */\n    vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow) {\n\n      vec3 seaWaterColor \x3d linearizeGamma(color);\n      // using half vector to determine the specular light\n      vec3 h \x3d normalize(l + v);\n      shadingInfo.NdotL \x3d clamp(dot(n, l), 0.0, 1.0);\n      shadingInfo.NdotV \x3d clamp(dot(n, v), 0.001, 1.0);\n      shadingInfo.VdotN \x3d clamp(dot(v, n), 0.001, 1.0);\n      shadingInfo.NdotH \x3d clamp(dot(n, h), 0.0, 1.0);\n      shadingInfo.VdotH \x3d clamp(dot(v, h), 0.0, 1.0);\n      shadingInfo.LdotH \x3d clamp(dot(l, h), 0.0, 1.0);\n\n      // angle between vertex normal and view direction\n      float upDotV \x3d max(dot(localUp,v), 0.0);\n      // reflected sky color: the reflected sky color consists of two main colors, the\n      // reflected color at the horizon and the reflected color of the zenit.\n      // the reflected sky color is then an approximation based on the fresnel term.\n      vec3 skyHorizon \x3d linearizeGamma(skyColor);\n      vec3 skyZenit \x3d linearizeGamma(skyZenitColor);\n      vec3 skyColor \x3d getSkyGradientColor(upDotV, skyHorizon, skyZenit );\n\n      // we use the upDotL to smoothen out the\n      // reflected color of the water\n      float upDotL \x3d max(dot(localUp,l),0.0);\n\n      // The approximated sky color is adjusted according to the sun position.\n      // This is done as approximation for e.g. night views.\n      skyColor *\x3d 0.1 + upDotL * 0.9;\n\n      // If a water surface is in shadow we just use a slight darkening of the\n      // water surface expressed with this shadowModifier.\n      float shadowModifier \x3d clamp(shadow, 0.8, 1.0);\n\n      // The reflected sky color consists of the fresnel reflection multiplied with the approximated sky color.\n      // The shadow is influencing the frensel term to keep the shadow impression for really near views. As long\n      // as reflection are absent there is a need to have a slight shadow for depth perception.\n      vec3 reflSky \x3d fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]) * skyColor * shadowModifier;\n\n      // The reflected sea color is the input water color combined with the reflected sky color.\n      // The reflected sky color is modified by the incoming light.\n      vec3 reflSea \x3d seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;\n\n      vec3 specular \x3d vec3(0.0);\n      // This prevents the specular light to be rendered when:\n      // - sun is behind a polygon (e.g. sundown for elevated polygons where nDotL might be still ok)\n      // - viewer is under water (for this localUp is better than n)\n      if(upDotV \x3e 0.0 \x26\x26 upDotL \x3e 0.0) {\n        // calculate the cook torrance BRDF but with simplified occlusion\n        vec3 specularSun \x3d brdfWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);\n        // Normalize light intensity to be between 0...1. Shadow cancels out specular light here\n        vec3 incidentLight \x3d lightIntensity * LIGHT_NORMALIZATION * shadow;\n\n        specular \x3d shadingInfo.NdotL * incidentLight * specularSun;\n      }\n      // combining reflected sky, reflected sea and specular highlight.\n      return tonemapACES(reflSky + reflSea + specular);\n    }\n  "]))))};
var c});